function Profile(props) {
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
      <h2>You are {props.age} years old!</h2>
    </div>
  );
}

export default Profile;
