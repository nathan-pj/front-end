import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { removeGoogleFromId } from '../../../utils/removeGoogleFromId';

export default function ChatIcon(house) {

  const { user } = useAuth0();

  let navigate = useNavigate();

  const handleClick = (e) => {
    e.stopPropagation();
    navigate(`/chat/${removeGoogleFromId(user.sub)}-${house.house.user_id}`); // 1st = Logged in user |  2nd seller id
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      viewBox="0 0 20 20"
      fill="currentColor"
      onClick={handleClick}
    >
      <path
        fillRule="evenodd"
        d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
        clipRule="evenodd"
      />
    </svg>
  );
}
