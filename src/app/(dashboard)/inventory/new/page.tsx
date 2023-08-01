import { PageContainer } from '@/components/PageContainer/PageContainer';
import { SimpleInput } from '@/components/Input/SimpleInput';
import { Button } from '@mantine/core';
import { ButtonProgress } from '@/components/Button/ButtonProgress';
import { SimpleTable } from '@/components/Table/SimpleTable';
import { PaginationTable } from '@/components/Table/PaginationTable';
import { SimpleButton } from '@/components/Button/SimpleButton';
import { TableScrollArea } from '@/components/Table/TableScrollArea';

type Item = {
	name: string;
	weight: number;
	unit: 'lbs' | 'kg';
};

const itemData: Item[] = [
	{
		name: 'Apples',
		weight: 10,
		unit: 'lbs',
	},
	{
		name: 'Bananas',
		weight: 12,
		unit: 'kg',
	},
	{
		name: 'Pepper',
		weight: 0.2,
		unit: 'lbs',
	},
	{
		name: 'Sale',
		weight: 0.6,
		unit: 'lbs',
	},
];

export default function NewInventory() {
	const onClick = async () => {
		'use server'
		const res = await fetch('https://www.google.com');
		console.dir(res);
	};

	return (
		<PageContainer title="New Inventory">
			<form action={onClick}>
				<SimpleInput label={'item'} placeholder={'Bananass'} />
				{/*<SimpleInput label={'weight'} placeholder={'1230'} />*/}
				<ButtonProgress type={'submit'}></ButtonProgress>
			</form>

			<form>
				<TableScrollArea data={itemData}></TableScrollArea>
				<SimpleButton color={'teal'} label={'Submit inventory!'}></SimpleButton>
			</form>
		</PageContainer>
	);
}
