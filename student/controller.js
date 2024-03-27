import studentModel from "./model.js";

export async function getStudent(req, res) {
    console.log("Get chala hai");
    try {
        const result = await studentModel.find();
        res.render('index', { data: result });
    } catch (error) {
        console.log(error);
    }
}

export async function createStudent(req, res) {
    console.log("Create Chala hai");
    try {
        const { name, age, fees } = req.body
        const doc = new studentModel({
            name: name,
            age: age,
            fees: fees
        })
        const result = await doc.save()
        console.log("Student Created Successfully");
        res.redirect("/");
    } catch (error) {
        console.log(error);
    }
}

export async function updateStudent(req, res) {

    try {
        const result = await studentModel.findByIdAndUpdate(req.params.id, req.body)
        console.log("Update is working");
        console.log(result);
        res.redirect("/");

    } catch (error) {
        console.log(error);
    }
}

export async function deleteStudent(req, res) {
    try {
        const result = await studentModel.findByIdAndDelete(req.params.id)
        res.redirect("/");
        console.log("Delete hogya hai");
    } catch (error) {
        console.log(error);
    }

}