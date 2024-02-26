const LoginPage = require('../pageobjects/login.page')
const homePage = require('../pageobjects/home.page')



describe('Swag Labs', () => {
    it('Should Login with standard_user credentials', async () =>{
        await LoginPage.open()
        await LoginPage.login(process.env.USERNAME_STANDARD_USER, process.env.PASSWORD_SAUCEDEMO)
        await homePage.validateHomePage()
    })

    it('Should get Login error with locked_out_user credentials', async () =>{
        await LoginPage.open()
        await LoginPage.login(process.env.USERNAME_LOCKED_OUT_USER, process.env.PASSWORD_SAUCEDEMO)
        await LoginPage.validateLockedOutUserError()
    })

    it('Should get Login error with problem_user credentials', async () =>{
        await LoginPage.open()
        await LoginPage.login(process.env.USERNAME_PROBLEM_USER, process.env.PASSWORD_SAUCEDEMO)
        await homePage.validateHomePage()
    })

    it('Should get Login error with performance_glitch_user credentials', async () =>{
        await LoginPage.open()
        await LoginPage.login(process.env.USERNAME_GLITCH_USER, process.env.PASSWORD_SAUCEDEMO)
        await homePage.validateHomePage()
    })

    it('Should get Login error with error_user credentials', async () =>{
        await LoginPage.open()
        await LoginPage.login(process.env.USERNAME_ERROR_USER, process.env.PASSWORD_SAUCEDEMO)
        await homePage.validateHomePage()
    })

    it('Should get Login error with visual_user credentials', async () =>{
        await LoginPage.open()
        await LoginPage.login(process.env.USERNAME_VISUAL_USER, process.env.PASSWORD_SAUCEDEMO)
        await homePage.validateHomePage()
    })
})