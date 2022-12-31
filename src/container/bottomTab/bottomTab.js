import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import ChatScreen from '../Tabs/chat/chatScreen';
import SwipeScreen from '../Tabs/swipes/swipeScreen';
import TagScreen from '../Tabs/tag/tagScreen';
import LikeScreen from '../Tabs/likes/likeScreen';
import ProfileScreen from '../Tabs/profile/profileScreen';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Tags" component={TagScreen} />
      <Tab.Screen name="Swipe" component={SwipeScreen} />
      <Tab.Screen name="Like" component={LikeScreen} />
      <Tab.Screen name="Chat" component={ChatScreen} />
    </Tab.Navigator>
  );
};

export default BottomTab;
