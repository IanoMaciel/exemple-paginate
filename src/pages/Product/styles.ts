import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  padding: 0 100px;

   @media print {
      height: auto;
      padding: 10px 50px;
   }
`;

export const Title = styled.div`
   width: 100%;
   display: flex;
   align-items: center;

   gap: 10px;

   button {
      padding: 5px 10px;
      border-radius: 4px;
   }
   
   @media print {
      text-align: left;
   }
`;

export const Paginate = styled.section`
   width: 100%;

   display: flex;
   align-items: center;
   justify-content: space-between;

   /* @media print {
      display: none; /* Esconder a paginação na impressão */
   } */
`;

export const PerPage = styled.div`
   select {
      padding: 5px 10px;
      border-radius: 4px;
   }

   display: flex;
   align-items: center;
   gap: 10px;

   /* @media print {
    display: none; /* Esconder a seleção de itens por página na impressão */
  } */
`;

export const Page = styled.div`
   display: flex;
   align-items: center;
   gap: 20px;
  button {
   padding: 5px 10px;
   border-radius: 4px;
  }

  /* @media print {
    display: none; /* Esconder os botões de navegação na impressão */
  } */
`;

export const ContentData = styled.section`
   width: 100%;
   height: 70%;

   border-collapse: collapse;
   overflow: auto; /* Adiciona scroll quando necessário */

   @media print {
    height: auto; /* Ajusta a altura para caber na página impressa */
    overflow: visible; /* Remove o scroll na impressão */
  }
`;


export const Table = styled.table`
  width: 100%;

  border-collapse: collapse;

  th, td {
    padding: 8px;
    border: 1px solid #ddd;
    text-align: left;
  }

  th {
   background-color: #f2f2f2;
  }

  th, td {
    text-align: center; /* Alinha todas as colunas à esquerda */
  }

  @media print {
    th {
      //background-color: #fff; /* Remove o fundo colorido para impressão */
      -webkit-print-color-adjust: exact;
    }
   }

`;

export const Data = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  gap: 50px;

  @media print {
    flex-direction: column;
    gap: 10px;
  }
`;