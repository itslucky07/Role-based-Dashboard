import React, { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};

export const DataProvider = ({ children }) => {
  const [users, setUsers] = useState([
    {
      id: 1,
      email: 'superadmin@example.com',
      role: 'superadmin',
      name: 'Super Admin',
      createdAt: new Date('2024-01-01'),
    },
    {
      id: 2,
      email: 'admin@example.com',
      role: 'admin',
      name: 'Admin User',
      createdAt: new Date('2024-01-02'),
    },
    {
      id: 3,
      email: 'creator@example.com',
      role: 'content_creator',
      name: 'Content Creator',
      createdAt: new Date('2024-01-03'),
    },
  ]);

  const [content, setContent] = useState([
    {
      id: 1,
      title: 'Black Friday Sale',
      description: 'Get up to 70% off on all items',
      offer: 'Limited time offer - Free shipping on orders over $50',
      imageUrl: 'https://via.placeholder.com/300x200?text=Black+Friday+Sale',
      createdBy: 2,
      createdAt: new Date('2024-01-10'),
    },
    {
      id: 2,
      title: 'New Product Launch',
      description: 'Introducing our latest innovation',
      offer: 'Early bird discount - 20% off for the first 100 customers',
      imageUrl: 'https://via.placeholder.com/300x200?text=New+Product',
      createdBy: 3,
      createdAt: new Date('2024-01-11'),
    },
    {
      id: 3,
      title: 'Summer Collection',
      description: 'Fresh styles for the season',
      offer: 'Buy 2 get 1 free on all summer items',
      imageUrl: 'https://via.placeholder.com/300x200?text=Summer+Collection',
      createdBy: 2,
      createdAt: new Date('2024-01-12'),
    },
  ]);

  const addUser = (userData) => {
    const newUser = {
      id: Date.now(),
      ...userData,
      createdAt: new Date(),
    };
    setUsers([...users, newUser]);
    return newUser;
  };

  const updateUser = (userId, userData) => {
    setUsers(users.map(user => 
      user.id === userId ? { ...user, ...userData } : user
    ));
  };

  const deleteUser = (userId) => {
    setUsers(users.filter(user => user.id !== userId));
  };

  const addContent = (contentData, createdBy) => {
    const newContent = {
      id: Date.now(),
      ...contentData,
      createdBy,
      createdAt: new Date(),
    };
    setContent([...content, newContent]);
    return newContent;
  };

  const updateContent = (contentId, contentData) => {
    setContent(content.map(item => 
      item.id === contentId ? { ...item, ...contentData } : item
    ));
  };

  const deleteContent = (contentId) => {
    setContent(content.filter(item => item.id !== contentId));
  };

  const getUserById = (userId) => {
    return users.find(user => user.id === userId);
  };

  const value = {
    users,
    content,
    addUser,
    updateUser,
    deleteUser,
    addContent,
    updateContent,
    deleteContent,
    getUserById,
  };

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
};