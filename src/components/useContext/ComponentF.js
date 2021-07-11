import React from "react";
import {ChannelContext, UserContext} from '../../App'

const ComponentF = () => {
  return <div>
      <UserContext.Consumer>
          {
              user => (
                  <ChannelContext.Consumer>
                      {
                          channel => <h4>Username is {user} and the channel name is {channel}</h4>
                      }
                  </ChannelContext.Consumer>
              )
          }
      </UserContext.Consumer>
  </div>;
};

export default ComponentF;
