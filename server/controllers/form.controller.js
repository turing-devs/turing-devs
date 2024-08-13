import Form from "../models/form.model.js";

const submitForm = async (req, res) => {
    const { name, email, message } = await req.body;

    const doc = await Form.create({ name, email, message });
    const submittedForm = Form.findById(doc._id);

    if (!submittedForm) {
        res.status(500).json({ message: "Failed To Submitted Form" });
    }
    
    res.status(201).json({ message: "Successfully Submitted Form" });
};

export { submitForm };
