import withRouter from '../Components/HOC/withRouter';

const PostPage = (props) => {
  const id = props.params.id || 1;
  console.log(props.params);
  return (
    <div className='my-8 flex flex-col items-center justify-center w-[100vh] bg-white h-[200px] rounded-lg'>
      <h2 className='text-center text-2xl'>Post Details - id = {id}</h2>
      <div className='text-center text-xl mt-2'>
        {JSON.stringify(props.params || { id: '1' })}
      </div>
    </div>
  );
};

export default withRouter(PostPage);
