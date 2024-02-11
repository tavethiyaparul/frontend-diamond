import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { makeApiCall } from '../common/MakeApicall';

const DiamondDetails = () => {
  // Access route parameters using useParams()
  const { id } = useParams();
  console.log("id",id)
  const [diamond,setDiamond] =useState({})

const getData =async()=>{
    await makeApiCall('get', `/diamond/${id}`,"", 'raw')
    .then((res) => {
      console.log(res)
      setDiamond(res?.data?.result)
     
    })
    .catch((error) => {
      console.log('error', error)
    })
}

useEffect(()=>{
    getData()
},[])

console.log("diamond?.Photo",diamond?.Photo,diamond?.VideoLink)
  // Now you can use the 'id' parameter in your component
  return (
    <div>
      <div>
      <h2>Diamond Details</h2>

      {/* Display diamond pictures */}
      <div>
        <h3>Pictures</h3>
       
          <img src={diamond?.Photo} className='w-50 h-80' />
       
      </div>

      {/* Display diamond videos */}
      <div>
        <h3>Videos</h3>
       
        <video class="video-thumbnail" controls>
            <source src={diamond?.VideoLink} type="video/mp4" />
            <img src={diamond?.Photo} alt="Video Thumbnail" />
            Your browser does not support the video tag.
          </video>
        
      </div>

      {/* Display other diamond details */}
      <div>
        <h3>Product Details</h3>
        <ul>
          <li>Color: {diamond?.Color}</li>
          <li>Clarity: {diamond?.Clarity}</li>
          <li>Cut: {diamond?.Cut}</li>
          <li>Price: {diamond?.Price}</li>
          {/* Add more details as needed */}
        </ul>
      </div>
    </div>
    </div>
  );
};

export default DiamondDetails;
