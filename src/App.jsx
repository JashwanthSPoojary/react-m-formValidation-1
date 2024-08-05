import './App.css'
import { useForm } from 'react-hook-form'

const App = () => {
  const {register,handleSubmit,formState:{errors}}=useForm();

  const onSubmitHandler = (e) =>{
    console.log(e);
    alert("Form Submitted Successfully");
  }

  return (
    <form action="" onSubmit={handleSubmit(onSubmitHandler)} >
      <div>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          {...register('name', { required: 'Name is required', maxLength: { value: 20, message: 'Name cannot exceed 20 characters' } })}
        />
        {errors.name && <p>{errors.name.message}</p>}
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
              message: 'Invalid email address'
            }
          })}
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>
      <button type='submit'>Submit</button>
    </form>
  )
}

export default App