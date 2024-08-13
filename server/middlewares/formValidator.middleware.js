const formValidator = (req, res, next) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        res.status(400).json({
            message: "Bad Payload: All Fields Are Required",
        });
    } else if ([name, email, message].some((field) => field?.trim() === "")) {
        res.status(400).json({
            message: "Bad Payload: All Fields Are Required",
        });
    } else if (email?.length < 6 || !validateEmail(email)) {
        res.status(406).json({
            message: "Invalid Email Format",
        });
    } else {
        next();
    }
};

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

export default formValidator;
