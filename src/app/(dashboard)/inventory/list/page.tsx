import { SimpleTable } from '@/components/Table/SimpleTable';
import { PaginationTable } from '@/components/Table/PaginationTable';
import { PageContainer } from '@/components/PageContainer/PageContainer';

export default function ListInventory() {
	return (
		<PageContainer title={'List Inventory'}>
			<SimpleTable />
			<PaginationTable />
		</PageContainer>
	);
}
