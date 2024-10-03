import reducer, {setCredentials, setLogout} from '../auth';

test('should return the initial state', () => {
  expect(reducer(undefined, {type: 'unknown'})).toEqual({
    user: null,
    token: null,
    userId: null,
    roles: [],
    onBoarding: false,
    refreshToken: null,
  });
});

test('should handle a set Credentials being added to an empty list', () => {
  const previousState = {
    user: null,
    token: null,
    userId: null,
    roles: [],
    onBoarding: false,
    refreshToken: null,
  };

  expect(
    reducer(
      previousState,
      setCredentials({
        user: 'testing',
        accessToken: 'testAccesstoken',
        refreshToken: 'testsRefreshToken',
        userId: '123344',
        roles: ['Admin'],
        isOnBoarding: true,
      }),
    ),
  ).toEqual({
    user: 'testing',
    token: 'testAccesstoken',
    refreshToken: 'testsRefreshToken',
    userId: '123344',
    roles: ['Admin'],
    onBoarding: true,
  });
});
