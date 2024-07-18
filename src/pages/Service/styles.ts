import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 0 100px;;
`;

export const Header = styled.section`
   width: 100%;

   display: flex;
   align-items: center;
   justify-content: space-between
   ;
   margin-bottom: 20px;
`;

export const PerPage = styled.div`
   select {
      padding: 5px 10px;
      border-radius: 4px;
   }

   display: flex;
   align-items: center;
   gap: 10px;
`;

export const Page = styled.div`
   display: flex;
   align-items: center;
   gap: 20px;
  button {
   padding: 5px 10px;
   border-radius: 4px;
  }
`;

export const ContentData = styled.section`
   width: 100%;
   height: 70%;

   border-collapse: collapse;
   overflow: auto; /* Adiciona scroll quando necessário */
`;


export const Table = styled.table`
  width: 100%;

  border-collapse: collapse;

  th, td {
    padding: 8px;
    border: 1px solid #ddd;
    text-align: left;
  }

  th, td {
    background-color: #f2f2f2;
    text-align: center; /* Alinha todas as colunas à esquerda */
  }
`;

export const Data = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  gap: 50px;
`;