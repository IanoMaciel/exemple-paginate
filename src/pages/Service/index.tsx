import { useState, useEffect } from 'react';
import api from '../../api/axios';

import * as S from './styles';
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

interface IProduct {
   id: number;
   name: string;
   description: string;
   value: number;
}

interface IPagination {
   current_page: number;
   data: IProduct[];
   first_page_url: string;
   from: number;
   last_page: number;
   last_page_url: string;
   next_page_url: string;
   path: string;
   per_page: number;
   prev_page_url: string | null;
   to: number;
   total: number;
}

export default function Service() {
   const [products, setProducts] = useState<IProduct[]>([]);

   // paginate 
   const [currentPage, setCurrentPage] = useState(1);
   const [itemsPerPage, setItemsPerPage] = useState(10);
   const [pagination, setPagination] = useState<IPagination | null>(null);


   const fetchData = async (page = 1, perPage = 10) => {
      try {
         const response = await api.get(`product?page=${page}&per_page=${perPage}`);
         setProducts(response.data.data);
         setPagination(response.data);
      } catch (e) {
         console.error('Error: ', e);
      }
   };

   useEffect(() => {
      fetchData(currentPage, itemsPerPage);
   }, [currentPage, itemsPerPage]);

   const handlePageChange = (page: number) => {
      setCurrentPage(page);
   };

   const handleItemsPerPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setItemsPerPage(Number(event.target.value));
      setCurrentPage(1); // Reset to the first page when items per page changes
   };

   return (
      <S.Container>
         <S.Header>
            <S.PerPage>
               <label htmlFor="itemsPerPage">Exibindo registro por página:</label>
               <select id="itemsPerPage" value={itemsPerPage} onChange={handleItemsPerPageChange}>
                  <option value={15}>15</option>
                  <option value={25}>25</option>
                  <option value={50}>50</option>
               </select>
            </S.PerPage>

            {pagination && (
               <S.Page>
                  <button onClick={() => handlePageChange(pagination.current_page - 1)} disabled={pagination.prev_page_url === null} >
                     <MdArrowBackIos/>
                  </button>
                  <span>Página {pagination.current_page} de {pagination.last_page}</span>
                  <button
                     onClick={() => handlePageChange(pagination.current_page + 1)}
                     disabled={pagination.next_page_url === null}
                  >
                     <MdArrowForwardIos/>
                  </button>
               </S.Page>
            )}
         </S.Header>

         <S.ContentData>
            <S.Table>
               <thead>
                  <tr>
                     <th>#</th>
                     <th>ID</th>
                     <th>Nome</th>
                     <th>Descrição</th>
                     <th>Valor R$</th>
                  </tr>
               </thead>
               <tbody>
                  {products.map((product, index) => (
                     <tr key={product.id}>
                        <td>{index + 1}</td>
                        <td>{product.id}</td>
                        <td>{product.name}</td>
                        <td>{product.description}</td>
                        <td>{product.value}</td>
                     </tr>
                  ))}
               </tbody>
            </S.Table>
         </S.ContentData>
      </S.Container>
   );
}