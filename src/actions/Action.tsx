export const fetchAboutData = async(dispatch: any) => {
    const URL = 'http://portfolio-env.rjz3zghhrm.us-west-2.elasticbeanstalk.com/about';
    const data = await fetch(URL);
    const dataJSON = await data.json();
    return dispatch({
      type: 'FETCH_ABOUT_DATA',
      payload: dataJSON.data
    })
}