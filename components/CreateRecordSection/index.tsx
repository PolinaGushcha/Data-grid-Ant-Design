import { Divider, Flex, Tabs } from "antd";

export const CreateRecordSection = () => {
    return (
    <Flex className="createRecordSection">
        {/* <Divider type="vertical" /> */}
        <Tabs
        className="createRecordSection__tabs"
        tabPosition="right"
        items={new Array(5).fill(null).map((_, i) => {
          const id = String(i + 1);
          return {
            label: 'Section Name',
            key: id,
            
          };
        })}
      />
      </Flex>
    )
}