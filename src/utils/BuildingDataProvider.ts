import { useState, useEffect } from 'react';
import  data from '../data/building.json';

interface Floor {
  name: string;
  soldiers: number;
  purpose: string;
  description: string;
  activity:string
}

const useBuildingData = () => {
  const [buildingData, setBuildingData] = useState<Floor[]>([]);
  const buildingDataJson : Floor[] = data 
  useEffect(() => {
    setBuildingData(buildingDataJson);
  },[])



  const getFloorByIndex = (floorIndex:number): Floor |undefined =>
  {
    return buildingDataJson[floorIndex];
  }
  const getListOfActivities = ():string[]=>{
    return buildingDataJson.map((floor) => floor.activity);
  }
  return {
    buildingData,
    getFloorByIndex,
    getListOfActivities
  };
};

export default useBuildingData;
