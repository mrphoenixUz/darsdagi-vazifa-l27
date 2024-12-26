import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetUserProfileQuery } from '../features/api';


const Profile = () => {
    const { id } = useParams();
    const { data, error, isLoading } = useGetUserProfileQuery(id);
    console.log("1111", data)
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading profile</div>;

    const { email, name, books } = data;

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold">Profile</h1>
            <div className="mt-4">
                <p><strong>Name:</strong> {name}</p>
                <p><strong>Email:</strong> {email}</p>
            </div>
            <div className="mt-6">
                <h2 className="text-xl font-semibold">User's Books</h2>
                {books.length > 0 ? (
                    <ul className="mt-2 space-y-4">
                        {books.map((book) => (
                            <li key={book.id} className="p-4 border rounded-lg">
                                <p><strong>Title:</strong> {book.title}</p>
                                <p><strong>Description:</strong> {book.description}</p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No books found.</p>
                )}
            </div>
        </div>
    );
};

export default Profile;
