import React from "react";
import { ReactDOM } from "react";

export const PlayerContext = createContext();

export default function Player({ children, ...restProps }) {
  const [showPlayer, setShowPlayer] = useState(false);

  return (
    <PlayerContext.Provider value={{showPlayer, setShowPlayer}}>
      <Container {...restProps}>{children}</Container>
    </PlayerContext.Provider>
    )
}

Player.Video = function PlayerVideo({...restProps}) {
  const {showPlayer, setShowPlayer} = useContext(PlayerContext);

  return showPlayer ? ReactDOM.createPortal(
      <Overlay onClick
    )
}