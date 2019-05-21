const HomeStyle = theme => ({
  title: {
    padding: '2rem',
    fontSize: '2.5rem',
    textAlign: 'center',
    fontWeight: 100,
    background: '#22b8cf',
    color: '#fff',
  },
  paletteWrapper: {
    padding: '1rem',
    background: '#f1f3f5',
  },
  palette: {
    display: 'flex',
    justifyContent: 'center'
  },
  color: {
    width: '2rem',
    height: '2rem',
    opacity: '.5',
    transition: 'all .2s',
    cursor: 'pointer',
    '&.active': {
      opacity: 1
    },
    '&:nth-child(n+1)': {
      marginLeft: '1rem',
    }
  },
  formWrapper: {
    padding: '1rem',
    borderBottom: '1px solid #22b8cf',
  },
  form: {
    display: 'flex',
  },
  textField: {
    margin: 0,
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
    flex: '1 1',
    fontSize: '1.25rem',
    outline: 'none',
    border: 'none',
    borderBottom: '1px solid #c5f6fa',
    '&>div, & input': {
      color: 'inherit',
    }
  },
  button: {
    padding: '.5rem 1rem',
    marginLeft: '1rem',
    background: '#22b8cf',
    borderRadius: '3px',
    color: '#fff',
    fontWeight: 600,
  },
  todoItem: {
    padding: '1rem',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    transition: 'all .15s',
    userSelect: 'none',

    '& .todoRemove': {
      marginRight: '1rem',
      color: '#e64980',
      fontWeight: 600,
      opacity: 0,
    },

    '&:hover': {
      background: '#e3fafc',
      '& .todoRemove': {
        opacity: 1,
      }
    },

    '& .check-mark': {
      fontSize: '1.5rem',
      lineHeight: '1rem',
      marginLeft: '1rem',
      color: '#3bc9db',
      fontWeight: 800,
      fontFamily: 'sans-serif'
    }
  },
  todoText: {
    flex: '1 1',
    wordBreak: 'break-all',
    '&.true': {
      textDecoration: 'line-through',
      color: '#adb5bd',
    }
  },

})

export default HomeStyle