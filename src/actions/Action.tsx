
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
    payload: dataJSON
  })
}

export const fetchProjectData = async(dispatch: any) => {
  const URL = `${process.env.REACT_APP_API_BASE_URL}project`;
  const data = await fetch(URL);
  const dataJSON = await data.json();
  return dispatch({
    type: 'FETCH_PROJECT_DATA',
    payload: dataJSON
  })
}

export const submitForm = async(formObj: object, dispatch: any) => {
  const settings = {
    method: 'POST',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        
    },
    body: JSON.stringify(formObj),
  };
  try{
    const URL = `${process.env.REACT_APP_API_BASE_URL}contact`;
    const data = await fetch(URL, settings);
    const dataJSON = await data.json();
    return dispatch({
      type: 'POST_FORM_DATA',
      payload: "Thanks for submitting!"
    }), dataJSON;
  } catch(err) {
    return err;
  }
}