'use client';

import { useState } from 'react';
import { createStyles, Table, ScrollArea, rem } from '@mantine/core';
import { SimpleButton } from "@/components/Button/SimpleButton";

const useStyles = createStyles(theme => ({
	header: {
		position: 'sticky',
		top: 0,
		backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
		transition: 'box-shadow 150ms ease',

		'&::after': {
			content: '""',
			position: 'absolute',
			left: 0,
			right: 0,
			bottom: 0,
			borderBottom: `${rem(1)} solid ${
				theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[2]
			}`,
		},
	},

	scrolled: {
		boxShadow: theme.shadows.sm,
	},
}));

export function TableScrollArea({ data }: any) {
	const { classes, cx } = useStyles();
	const [scrolled, setScrolled] = useState(false);

	const rows = data.map(row => (
		<tr key={row.name}>
			<td>{row.name}</td>
			<td>{row.weight}</td>
			<td>{row.unit}</td>
			<td>
				<SimpleButton color={'red'} label={'Delete'}></SimpleButton>
			</td>
		</tr>
	));

	return (
		<ScrollArea h={300} onScrollPositionChange={({ y }) => setScrolled(y !== 0)}>
			<Table miw={700}>
				<thead className={cx(classes.header, { [classes.scrolled]: scrolled })}>
					<tr>
						<th>Item</th>
						<th>Weight</th>
						<th>Unit</th>
					</tr>
				</thead>
				<tbody>{rows}</tbody>
			</Table>
		</ScrollArea>
	);
}
