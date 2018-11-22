export const styles = theme => ({
    eastJura: {
        background: 'url("../img/dupa_slonia.jpg")',
        backgroundSize: 'cover',
        width: '100%',
        height: '33.33%',
        display: 'flex',
        justifyContent: 'center',
        [theme.breakpoints.up('sm')]: {
            width: '33.33%',
            height: '100%',
          },
    },
    centerJura: {
        background: 'url("../img/ogro.jpg")',
        backgroundSize: 'cover',
        width: '100%',
        height: '33.33%',
        display: 'flex',
        justifyContent: 'center',
        [theme.breakpoints.up('sm')]: {
            width: '33.33%',
            height: '100%',
          },
    },
    northJura: {
        background: 'url("../img/Rzędkowice.jpg")',
        backgroundSize: 'cover',
        width: '100%',
        height: '33.33%',
        display: 'flex',
        justifyContent: 'center',
        [theme.breakpoints.up('sm')]: {
            width: '33.33%',
            height: '100%',
          },
    },
    mainContainer: {
    width: '100%',
    height: '93vh',
    [theme.breakpoints.up('sm')]: {
        display: 'flex'
      },
    },
    buttonCenter: {
        width: '100%',
        height: '40px',
        display: 'flex',
        justifyContent: 'center',
        margin: 'auto'
    }
  });