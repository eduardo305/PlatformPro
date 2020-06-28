const CustomError = ({statusCode}) => {
    console.log('TCL: CsutomError -> statusCode', statusCode);
    if (statusCode === 404) {
        return <h1> Thre resource was not found...</h1>
    }
    return <h1>Oops! Something went wrong...</h1>
};


CustomError.getInitialProps = ({err, res}) => {
    return {statusCode: res ? res.satusCode: err ? err.statusCode:404};
};

export default CustomError;