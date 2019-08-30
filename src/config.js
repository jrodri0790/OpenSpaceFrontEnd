const config = {
    development: {
        bff_url: 'http://localhost:5000/open-space/'
    },
    production: {
        bff_url: 'https://open-space-backend.herokuapp.com/open-space/'
    }
}

const urls = {
    talksUrl: `${config[process.env.NODE_ENV].bff_url}talks`,
    voteUrl: `${config[process.env.NODE_ENV].bff_url}vote`,
    feedbackUrl: `${config[process.env.NODE_ENV].bff_url}feedback`
}

export default urls
