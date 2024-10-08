import reducer, {setCredentials, setLogout} from '../auth';

test('should return the initial state', () => {
  expect(reducer(undefined, {type: 'unknown'})).toEqual({
    user: null,
    token: null,
    userId: null,
    roles:[],
  });
});

test('should handle a set Credentials being added to an empty list', () => {
  const previousState={
    user: null,
    token: null,
    userId: null,
    roles:[],
  };

  expect(reducer(previousState, setCredentials({user:'testing', accessToken:'testAccesstoken',userId:'123344',roles:["Admin"]}))).toEqual(
    {user:'testing', token:'testAccesstoken',userId:'123344',roles:["Admin"]},
  );
});
