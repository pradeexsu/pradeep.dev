interface StackOverflowProps {
  user: string;
}

export default function PostPage(props: StackOverflowProps) {
    console.log(props);
    
  return (
    <>
      <p> {props.user}</p>
    </>
  );
}

export async function getStaticProps(context: any) {
  return {
    props: {
      user: "pradeep",
    },
  };
}
// User Authorized with account 
// id = 17309799, 
// got 
// access token = C0iSY(vugeYKQAeeMRaEIw))