/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  asyncActionError,
  asyncActionFinish,
  asyncActionStart,
} from "../async/asyncReducer";
import { dataFromSnapshot } from "../firestore/FirestoreServices";

const useFirestireDoc = ({ query, data, deps }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncActionStart());
    const unsubscribe = query().onSnapshot(
      (snapshop) => {
        if (!snapshop.exists) {
          dispatch(
            asyncActionError({
              code: "not_found",
              message: "Could not found document",
            })
          );
          return;
        }
        data(dataFromSnapshot(snapshop));

        dispatch(asyncActionFinish());
      },
      (error) => dispatch(asyncActionError(error))
    );
    return () => {
      unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};

export default useFirestireDoc;
