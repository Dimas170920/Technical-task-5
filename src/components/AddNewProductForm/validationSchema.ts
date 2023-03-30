import * as yup from 'yup';

 const validationSchema = yup.object({
    title: yup
      .string()
      .required('Title is required'),
      year: yup
      .string(),
      author: yup
      .string()
      .required('Author is required'),
      rating: yup
      .string()
      .required('Rating is required'),
      
  });

  export default validationSchema