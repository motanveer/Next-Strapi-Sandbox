import React from 'react';
import Head from 'next/head'
import Card from '../../components/card';



export default function Character({data}) {
    console.log(data.data.id)
    return (
        <div className="container">
          <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
          <main>
            <h1 className="title">
            Meet Your New Hero.
            </h1>
    
    
            <p className="description">
              Legends aren't born, they're made.<code>🔥 Join a Team Today</code>
            </p>

            <Card fullSize={true} id={data.data.id}  data={data.data.attributes}/>
    
            <hr />
            
          </main>
    
          <footer>
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {' '}
              <img src="/vercel.svg" alt="Vercel" className="logo" />
            </a>
          </footer>
    
          <style jsx>{`
            .container {
              min-height: 100vh;
              padding: 0 0.5rem;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
          
            }
    
            main {
              padding: 5rem 0;
              flex: 1;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
            }
    
            footer {
              width: 100%;
              height: 100px;
              border-top: 1px solid #eaeaea;
              display: flex;
              justify-content: center;
              align-items: center;
            }
    
            footer img {
              margin-left: 0.5rem;
            }
    
            footer a {
              display: flex;
              justify-content: center;
              align-items: center;
            }
    
            a {
              color: inherit;
              text-decoration: none;
            }
    
            .title a {
              color: #0070f3;
              text-decoration: none;
            }
    
            .title a:hover,
            .title a:focus,
            .title a:active {
              text-decoration: underline;
            }
    
            .title {
              margin: 0;
              line-height: 1.15;
              font-size: 4rem;
            }
    
            .title,
            .description {
              text-align: center;
            }
    
            .description {
              line-height: 1.5;
              font-size: 1.5rem;
            }
    
            code {
              background: #fafafa;
              border-radius: 5px;
              padding: 0.75rem;
              font-size: 1.1rem;
              font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
                DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
            }
    
            .logo {
              height: 1em;
            }
          `}</style>
    
          <style jsx global>{`
            html,
            body {
              padding: 0;
              margin: 0;
              font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
                Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
                sans-serif;
            }
    
            * {
              box-sizing: border-box;
            }
          `}</style>
        </div>
      )
}


//How many character pages we're generating:
//------------------------------------------

export async function getStaticPaths(){
    const res = await fetch('http://localhost:1337/api/characters?populate=*')
    const characters = await res.json()

    //console.log(characters)
    const paths = characters.data.map((char) => ({
        params: {name: char.id.toString() },
      }));
    
      return {
        paths,
        fallback: true,
      };
}

export async function getStaticProps({params}){
    //console.log(params)
    const {name} = params;
    const res = await fetch(`http://localhost:1337/api/characters/${name}/?populate=*`)
    const data = await res.json()
    
    //console.log(data)

    return{
        props: {data}
    }
}


