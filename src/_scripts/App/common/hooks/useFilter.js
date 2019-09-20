import { useContext } from 'react'

const useFilter = (context) => {
  const [state, setState] = useContext(context)

  function matchFilter() {

  }


  return {
    matchFilter,

  }
}

export default useFilter