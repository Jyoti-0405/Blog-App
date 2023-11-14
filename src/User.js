import { useSelector } from "react-redux/es/hooks/useSelector"
import { selectAllUsers } from "./usersSlice";

const User = ({userId}) => {
    const users = useSelector(selectAllUsers);
    return (
        <div>
            Hello Users!!!
        </div>
    )

}

export default User