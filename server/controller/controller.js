const CarSchema = require('../model/model');

const createCar = async(req,res,next)=>{
    if(!req.body){
        res.status(400).send({message:"Content cannot be empty!"});
        return;
       }
       let{no,name,model,year,color,rcNo}= req.body;
    try {
      let car = await CarSchema.insertMany([{no,name,model,year,color,rcNo}])
      res.json({
        error:false,
        message:"Car created successfully",
        data:null
      })
    } catch (err) {
        console.log(err);
        next(err)
    }
}

const getCars = async(req,res,next)=>{
    try {
        const car = await CarSchema.find().lean()
        res.json({
            error:false,
            message:"Car fetched successfully",
            data:car
          })
    } catch (error) {
        console.log(error);
        next(error)

    }
}
const getCarById = async(req,res,next)=>{
let{id}= req.params.id;
    try {
        const car = await CarSchema.findOne(id).lean()
        res.json({
            error:false,
            message:"Car fetched successfully",
            data:car
          })
        
    } catch (error) {
        console.log(error);
        next(error)
    }
}
const updateCar = async(req,res,next)=>{
    let{no,name,model,year,color,rcNo}= req.body;
    try {
        let car = await CarSchema.findOne({_id:req.params.id});
        if(car){
          await CarSchema.updateOne(
            {_id:req.params.id},
            {
            $set:{no,name,model,year,color,rcNo}
          });
          res.json({
            error:false,
            message :"user updated successfully",
            data:{no,name,model,year,color,rcNo}
        })
        }else{
            res.json({
                error:true,
                message :"Invalid Id",
                data:null 
            })
        }
        
    } catch (error) {
        console.log(error);
        next(error)
    }
}
const deleteCar = async(req,res,next)=>{
    try {
        const car = await CarSchema.findOne({_id:req.params.id});
        if(car){
            await CarSchema.deleteOne({_id:req.params.id});
            res.json({
                error:false,
                message:"Car detail deleted successfully!",
                data:null
            })
        }else{
            res.json({
                error:true,
                message:"Invalid Id!!",
                data:null
            })
        }
    } catch (error) {
        console.log(error);
        next(error);
    }
}


module.exports ={
    createCar,
    getCars,
    getCarById,
    updateCar,
    deleteCar,
}

// DgJBBM6ifBOkNOEi
