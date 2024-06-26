import { useEffect, useCallback } from 'react';

const isRefArray = (ref) => {
  'length' in ref;
};

const isTarget = (ref, event) => {
  ref && ref.current && ref.current.contains(event.target);
};

const trueForAny = (array, condition) => {
  array.reduce(
    (conditionAlreadyMet, value) => conditionAlreadyMet || condition(value),
    false
  );
};

const useClickOutside = (ref, onclick) => {
  const handleClick = useCallback(
    (click) => {
      if (isRefArray(ref)) {
        if (trueForAny(ref, (d) => isTarget(d, click))) {
          return;
        }
      } else if (isTarget(ref, click)) {
        return;
      }
      onclick();
    },
    [onclick, ref]
  );

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [handleClick]);
  return ref;
};

export default useClickOutside;
