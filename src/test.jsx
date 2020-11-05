;<Router>
    <ThemeProvider theme={darktheme}>
        <Container maxWidth="sm" className="container-grid">
            <Box my={8}>
                <AuthButton />

                <Grid container spacing={1}>
                    <Grid item xs={12} sm={8}>
                        <Paper elevation={10}>
                            <MenuList>
                                <MenuItem>
                                    <Link
                                        to="/public"
                                        className="Btn BtnOutlinedPrimary"
                                    >
                                        Public Page
                                    </Link>
                                </MenuItem>
                                <MenuItem>
                                    <Link
                                        to="/protected"
                                        className="Btn BtnOutlinedSecondary"
                                    >
                                        Protected Page
                                    </Link>
                                </MenuItem>
                            </MenuList>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={8}>
                        <Box
                            bgcolor="bk.main"
                            color="secondary.contrastText"
                            p={2}
                        >
                            <Route path="/public" component={Public} />
                            <Route path="/login" component={Login} />
                            <PrivateRoute
                                path="/protected"
                                component={Protected}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    </ThemeProvider>
</Router>
