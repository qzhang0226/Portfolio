
export const fetchAboutData = async(dispatch: any) => {
    const URL = `${process.env.REACT_APP_API_BASE_URL}about`;
    const data = await fetch(URL);
    const dataJSON = await data.json();
    return dispatch({
      type: 'FETCH_ABOUT_DATA',
      payload: dataJSON.data
    })
}

export const fetchProfileData = async(dispatch: any) => {
  const URL = `${process.env.REACT_APP_API_BASE_URL}profile`;
  const data = await fetch(URL);
  const dataJSON = await data.json();
  return dispatch({
    type: 'FETCH_PROFILE_DATA',
    payload: dataJSON.data
  })
}