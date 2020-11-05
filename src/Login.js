function Login({ text }) {
    let [loggedIn, setLoggedIn] = useState(netlifyAuth.isAuthenticated)
  
    useEffect(() => {
      let isCurrent = true
      netlifyAuth.initialize((user) => {
        if (isCurrent) {
          setLoggedIn(!!user)
        }
      })
  
      return () => {
        isCurrent = false
      }
    }, [])
  
    let login = () => {
      netlifyAuth.authenticate((user) => {
        setLoggedIn(!!user)
      })
    }
  
    return (
      <div className="loginContainer">
          {loggedIn ? (
            <div>
              You're logged in! Please do visit{' '}
              <Link href="/protected">
                <a>the special, members-only space.</a>
              </Link>
            </div>
          ) : (
          <button className={styles.btnLogin} onClick={login}>{text}</button>
          )}
      </div>
    )
  }