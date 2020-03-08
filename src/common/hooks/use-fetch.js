import { useState } from 'react';

const initialState = () => ({
  data: null,
  fetching: false,
  fetched: false,
  error: null
});

function useFetch(request) {
  const [state, setState] = useState(initialState());
  const fetch = async params => {
    try {
      setState(prevState => ({ ...prevState, fetching: true }));
      const response = await request(params);
      setState(prevState => ({
        ...prevState,
        fetching: false,
        fetched: true,
        error: null,
        data: [...response.data]
      }));
    } catch (error) {
      console.error(error);
      setState(prevState => ({
        ...prevState,
        fetching: false,
        fetched: true,
        error
      }));
    }
  };

  const actions = {
    fetch
  };

  return {
    state,
    actions
  };
}

export default useFetch;
