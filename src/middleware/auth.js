const adminAuth = (req,res,next) => {
    console.log('Admin authentication middleware executed   ')

    const token = 'xyz'
    const checkToken = token === 'xyz'
    if (!checkToken){
        res.status(401).send('Unauthorized: Invalid admin token')
    }
    next()

    
}

const userAuth = (req,res,next) => {
    const token = 'abc'
    const checkdata = token === 'abc'
    if (!checkdata) {
        res.status(401).send('unauthorized user')
    }
    next()
}

module.exports = {adminAuth, userAuth}