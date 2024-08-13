import mongoose from "mongoose";

import formSchema from "../schemas/form.schema.js";

const From = mongoose.model("Form", formSchema);

export default From;
