const mark = require("../model/index")

/*Add Marks */

const add_mark = async (req, res) => {
    var sub1 = parseInt(req.body.sub1);
    var sub2 = parseInt(req.body.sub2);
    var sub3 = parseInt(req.body.sub3);
    var sub4 = parseInt(req.body.sub4);
    var sub5 = parseInt(req.body.sub5);

    var total = sub1 + sub2 + sub3 + sub4 + sub5;
    var per = total/5;
    if(sub1<35 && sub2<35 && sub3<35 && sub4<35 && sub5<35)
    {
      var result= "Fail";
    }else if(sub1<35 || sub2<35 || sub3<35 || sub4<35 || sub5<35)
    {
      var result = "Atct";
    }else if(sub1<35 && sub2<35 || sub1<35 && sub3<35 || sub1<35 && sub4<35 || sub1<35 && sub5<35 || sub2<35 && sub3<35 || sub2<35 && sub4<35 || sub2<35 && sub5<35 || sub3<35 && sub4<35 || sub3<35 && sub5<35 || sub4<35 && sub5<35){
      var result = "Atct";
    }else {
      var result = "Pass";
    }
     await mark.create(req.body);

     var data = await mark.find({"name": req.body.name })
     var id = data[0]._id;

     await mark.findByIdAndUpdate({"_id":id},{"total":total,"per":per,"result":result});
     await mark.findByIdAndUpdate({"_id":id});
     var student_mark = await mark.findByIdAndUpdate({"_id":id});
    res.status(200).json({
        status: "success",
        student_mark
    })
}
/*View All marks */
const view_mark = async (req, res) => {
    var data = await mark.find(req.params);

    res.status(200).json({
        status: "success",
        data
    })
}
/*View Single STudent Marks */
const single_student = async (req, res) => {
    var id = req.params.id;

    var data = await mark.findById(id, req.params.data);

    res.status(200).json({
        status: "success",
        data
    })
}
/*Update Student Mark */
const update_mark = async (req, res) => {
    var sub1 = parseInt(req.body.sub1);
    var sub2 = parseInt(req.body.sub2);
    var sub3 = parseInt(req.body.sub3);
    var sub4 = parseInt(req.body.sub4);
    var sub5 = parseInt(req.body.sub5);

    var total = sub1 + sub2 + sub3 + sub4 + sub5;
    var per = total/5;
    if(sub1<35 && sub2<35 && sub3<35 && sub4<35 && sub5<35)
    {
      var result= "Fail";
    }else if(sub1<35 || sub2<35 || sub3<35 || sub4<35 || sub5<35)
    {
      var result = "Atct";
    }else if(sub1<35 && sub2<35 || sub1<35 && sub3<35 || sub1<35 && sub4<35 || sub1<35 && sub5<35 || sub2<35 && sub3<35 || sub2<35 && sub4<35 || sub2<35 && sub5<35 || sub3<35 && sub4<35 || sub3<35 && sub5<35 || sub4<35 && sub5<35){
      var result = "Atct";
    }else {
      var result = "Pass";
    }

    await mark.findByIdAndUpdate({"_id":req.params.id},{"sub1":sub1,"sub2":sub2,"sub3":sub3,"sub4":sub4,"sub5":sub5,"total":total,"per":per,"result":result});
     await mark.findByIdAndUpdate({"_id":req.params.id});
    var data= await mark.findByIdAndUpdate({"_id":req.params.id});

    res.status(200).json({
        status:"success",
        data
    })
}
/*Delete Student */
const delete_mark = async(req,res) =>{
    var id = req.params.id;
    var data = await mark.findByIdAndDelete(id,req.params);

    res.status(200).json({
        status:":success",
        data
    })
}
/*Minimum Mark Student */
const min_student = async(req,res) => {
    var minimum = await mark.find().sort("total").limit(1);

    res.status(200).json({
        status:"success",
        minimum
    })
}
/* Maximum Mark Student */
const max_student = async(req,res) =>{
    var maximum = await mark.find().sort('-total').limit(1);

    res.status(200).json({
        status:"success",
        maximum
    })
}
/*Pass  Student  Result  */
const pass_student = async(req,res) =>{
    const data = await mark.find({'result':'Pass'});
    
    res.status(200).json({
        status:"success",
        data
    });
}
/*Fail Student */
const fail_student = async(req,res) =>{
    const data = await mark.find({'result':'Fail'});

    res.status(200).json({
        status:'success',
        data
    })
}
/*Atct Student */
const atct_student = async(req,res) =>{
    const data = await mark.find({'result':'Atct'});

    res.status(200).json({
        status:"success",
        data
    })
}
/*Search Student */
const search_student = async(req,res) =>{
    const data = await mark.find({
        "$or" :[
            {
                name: { $regex: req.params.key,$options:'i' }
            }
        ]
    })
    res.status(200).json({
        status:"success",
        data
    })
}
module.exports = {
    add_mark,
    view_mark,
    single_student,
    update_mark,
    delete_mark,
    min_student,
    max_student,
    pass_student,
    fail_student,
    atct_student,
    search_student
}