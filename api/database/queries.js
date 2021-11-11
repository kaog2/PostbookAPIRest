const userQueries = {
    getAllUsers: 'select * from [User]',
    insertUser: 'INSERT INTO [User] (Email, UserName, Password, PopupActive, Givename, Surname, Birthday)' +
                 'VALUES (@Email, @UserName, @Password, @PopupActive, @Givename, @Surname, @Birthday)',
    getUserById: 'SELECT * FROM [User] WHERE UserId = @UserId',
    deleteUserById: 'DELETE FROM [User] WHERE UserId = @UserId',
    updateUserById: 'UPDATE [User] SET Email = @Email, UserName = @UserName, Password = @Password, PopupActive = @PopupActive, Givename = @Givename, Surname = @Surname, Birthday = @Birthday' +
                    ' WHERE UserId = @UserId'
}

module.exports = userQueries;