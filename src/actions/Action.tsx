
export const getBaseUrl = () => {
  switch (process.env.REACT_APP_DEV_ENV) {
    case "0":
      var devBaseUrl = process.env.REACT_APP_DEV_BASE_URL;
      return devBaseUrl;
    case "1":      
      var prodBaseUrl = process.env.REACT_APP_API_BASE_URL;
      return prodBaseUrl; 
    default:
      break;
  }
}

export const fetchHomeData = async(dispatch: any) => {
  const URL = `${getBaseUrl()}home`;
  const data = await fetch(URL);
  const dataJSON = await data.json();
  return dispatch({
    type: 'FETCH_HOME_DATA',
    payload: dataJSON.home[0]
  })
}

export const fetchAboutData = async(dispatch: any) => {
    const URL = `${getBaseUrl()}about`;
    const data = await fetch(URL);
    const dataJSON = await data.json();
    return dispatch({
      type: 'FETCH_ABOUT_DATA',
      payload: dataJSON.data
    })
}

export const fetchProfileData = async(dispatch: any) => {
  const URL = `${getBaseUrl()}profile`;
  const data = await fetch(URL);
  const dataJSON = await data.json();
  return dispatch({
    type: 'FETCH_PROFILE_DATA',
    payload: dataJSON
  })
}

export const fetchProjectData = async(dispatch: any) => {
  const URL = `${getBaseUrl()}project`;
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
    const URL = `${getBaseUrl()}contact`;
    const data = await fetch(URL, settings);
    const dataJSON = await data.json();
    return dispatch({
      type: 'POST_FORM_DATA',
      payload: "Thanks for submitting!"
    })
  } catch(err) {
    return err;
  }
}