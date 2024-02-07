const getPredictedAge = async (name) => {
  const res = await fetch(`https://api.agify.io?name=${name}`);
  return res.json();
};

const getPredictedGender = async (name) => {
  const res = await fetch(`https://api.genderize.io?name=${name}`);
  return res.json();
};


const page = async ({params}) => {
  const ageData = getPredictedAge(params.name);
  const genderData = getPredictedGender(params.name);

  const [age,gender]= await Promise.all([ageData,genderData])


  return (
    <div>
    <p>name
    {params.name}
    </p>
    <p>Age: {age?.age}</p>
    <p>Gender: {gender?.gender}</p>
    </div>
    
  )
}

export default page


//creating func for diff api
//getting data 
//pass that data into promis that all if have multiple apis
