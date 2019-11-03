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

export const getWpBaseUrl = () => {
  switch (process.env.REACT_APP_DEV_ENV) {
    case "0":
      var wpDevBaseUrl = process.env.REACT_APP_WP_DEV_BASE_URL;
      return wpDevBaseUrl;
    case "1":      
      var wpProdBaseUrl = process.env.REACT_APP_WP_DEV_BASE_URL;
      return wpProdBaseUrl; 
    default:
      break;
  }
}

export const fetchHomeData = async(dispatch: any) => {

  const URL = `${getBaseUrl()}home`;
  const WPURL = `${getWpBaseUrl()}posts`;

  const data = await fetch(URL);
  const blogData = await fetch(WPURL);

  const dataJSON = await data.json();
  const blogDataJSON = await blogData.json();

  const homeBlogsData = await {
    blogs: blogDataJSON
  };

  const homeDataJson = Object.assign(dataJSON, homeBlogsData);

  return dispatch({
    type: 'FETCH_HOME_DATA',
    payload: homeDataJson
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
    await data.json();
    return dispatch({
      type: 'POST_FORM_DATA',
      payload: "Thanks for submitting!"
    })
  } catch(err) {
    return err;
  }
}

export const fetchProjectDetails = async(name: string, dispatch: any) => {
  const URL = `${getBaseUrl()}project/${name}`;
  const data = await fetch(URL);
  const dataJSON = await data.json();
  return dispatch({
    type: 'FETCH_PROJECT_DETAILS_DATA',
    payload: dataJSON
  })
}

export const fetchBlogDetails = async(id: number, dispatch: any) => {
  const WPURL = `${getWpBaseUrl()}posts/${id}`;
  const data = await fetch(WPURL);
  const dataJSON = await data.json();
  return dispatch({
    type: 'FETCH_BLOG_DETAILS_DATA',
    payload: dataJSON
  })
}

export const cleanUpBlogData = async(dispatch: any) => {
  return dispatch({
    type: 'FETCH_BLOG_DETAILS_DATA',
    payload: {}
  })
}



