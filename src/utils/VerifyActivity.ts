import roles from "../data/roles.json";

interface IuseActivityParams {
  activity: string;
  role: string;
  activities: string[];
}

const useIsVerified = ({ activity, role, activities }: IuseActivityParams) : boolean => {
  const roleIndex = roles.indexOf(role);
  const activityIndex = activities.indexOf(activity);
  console.log(roleIndex,"=", " roleIndex, ", activityIndex, "=", "activityIndex");
  
  if (roleIndex !== -1 && activityIndex !== -1) {
    return roleIndex >= activityIndex;
  }
  else return false
};

export default useIsVerified;
