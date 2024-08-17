import reducer, {setCredentials, setLogout} from '../auth';

test('should return the initial state', () => {
  expect(reducer(undefined, {type: 'unknown'})).toEqual({
    user: null,
    token: null,
    userId: null,
  });
});

test('should handle a set Credentials being added to an empty list', () => {
  const previousState={
    user: null,
    token: null,
    userId: null,
  };

  expect(reducer(previousState, setCredentials({user:'testing', accessToken:'testAccesstoken',userId:'123344'}))).toEqual(
    {user:'testing', token:'testAccesstoken',userId:'123344'},
  );
});
