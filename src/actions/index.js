// here I write my action creators
// functions that return actions
export const addJobToFavouritesAction = (job) => ({
  type: 'ADD_JOB_TO_FAVOURITES',
  payload: job,
});
